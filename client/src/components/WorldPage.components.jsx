import {React,useEffect,useRef,useState, useMemo, createRef} from "react";
import {MaterialsData} from "../Data/Materials";
import axios from "axios";
import CollectEffect from "../sounds/collect.mp3";
import "./WorldPage.components.css";

const endPoint = "http://localhost:5555";
const MaterialsLength = 8;
let currentID = 1;

export const WorldPage = ({character,setCharacter}) => {
    const [materials,setMaterials] = useState([]);
    const worldref = useRef()
    const [collectAudio,setCollectAudio] = useState(new Audio(CollectEffect));
    const [fadeOut,setFadeOut] = useState("fade-out");

    useEffect( ()=> {
        setTimeout(() => {
            setFadeOut(""); 
        },3000); 
    },[])

    useEffect( ()=> {
        const toId = setTimeout(()=> {
        if (materials.length < MaterialsLength) {
            const materialData = MaterialsData[Math.floor(Math.random() * MaterialsData.length)];
            materialData["amount"] = Math.floor(Math.random() * 5) + 1;
            setMaterials([...materials,{id:currentID,top:Math.floor(Math.random() * worldref.current.clientHeight - 50) + 40,
            left:Math.floor(Math.random() * worldref.current.clientWidth - 50) + 30,materialData}]);
            currentID++;
        }},3000)
        return ()=> {
            clearTimeout(toId);
        }
    }
    ,[materials])


    const onMaterialClick = async (material,e) => {
        collectAudio.play();
        e.currentTarget.classList.add("swirl-out-bck");
        const {materialData} = materials.find(m => m.id === material.id);
        const addMaterial = character.materials[materialData.type] ? 
        {...materialData, amount:character.materials[materialData.type].amount + materialData.amount} : {...materialData};
        const upgChar = await axios.put(endPoint + "/api/character",{...character, materials: {...character.materials,[materialData.type]: addMaterial}});
        setCharacter(upgChar.data);
        const _materials = materials.filter(m => m.id !== material.id);
        setMaterials(_materials);
    }

    const renderedMaterials = () => {
        return materials.map((material) => {
            return <div key={material.id} onClick={(e) => onMaterialClick(material,e)} className="material" 
            style={{top:material.top,left:material.left, cursor:"pointer"}}><img src={material.materialData.imgURL}/></div>
        })
    }
    
    return(
        <div ref={worldref} className={`world-container ${fadeOut}`}>
            {renderedMaterials()}
            {console.log(character)}

        </div>
    );
}