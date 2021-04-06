import {React,useEffect,useRef,useState} from "react";
import {MaterialsData} from "../Data/Materials";
import axios from "axios";
import "./WorldPage.components.css";

let currentID = 1;
export const WorldPage = ({character,setCharacter}) => {
    // const [character, setCharacter] = useState({});
    const [materials,setMaterials] = useState([]);
    const worldref = useRef()
    const materialRef = useRef([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const data = await axios.get(
    //         `https://605cf2c16d85de00170db556.mockapi.io/Character/1`
    //       );
    //       const characterData = data.data;
    //       if (!characterData.hasOwnProperty("status")) {
    //         const baseStatus = {
    //           damage: 5,
    //           hp: 20,
    //           mp: 20,
    //         };
    //         characterData.status = baseStatus;
    //         await axios.put(
    //           "https://605cf2c16d85de00170db556.mockapi.io/Character/1",
    //           characterData
    //         );
    //       }
    //       setCharacter(characterData);
    //     };
    //     character && fetchData();
    //   }, []);

    useEffect( ()=> {
        const toId = setTimeout(()=> {
        if (materials.length < 8) {
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


    const onMaterialClick = async (id) => {
        console.log(materials);
        const {materialData} = materials.find(m => m.id === id);
        const addMaterial = character.materials[materialData.type] ? 
        {...materialData, amount:character.materials[materialData.type].amount + materialData.amount} : {...materialData};
        // console.log(`sum is ${character.materials[materialData.type].amount + materialData.amount}`);
        const upgChar = await axios.put("https://605cf2c16d85de00170db556.mockapi.io/Character/1",{...character, materials: {...character.materials,[materialData.type]: addMaterial}});
        setCharacter(upgChar.data);
        const _materials = materials.filter(m => m.id !== id);
        setMaterials(_materials);
    }

    const renderedMaterials = () => {
        return materials.map((material) => {
            return <div key={material.id} ref={materialRef[material.id % 8]} onClick={() => onMaterialClick(material.id)} className="material" 
            style={{top:material.top,left:material.left, cursor:"pointer"}}>{material.materialData.type}</div>
        })
    }

    return(
        <div ref={worldref} className="world-container">
            {renderedMaterials()}
            {/* { {console.log(materials)} */}
            {console.log(character)}

        </div>
    );
}