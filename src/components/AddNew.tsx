import { Food } from "@/types/Food";
import { useState } from "react";
import { getDatabase, updateDatabase } from "@/databaseManager";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Fridge from "@/components/Fridge";

interface AddNewProps {
  toggleAddNew: () => void;
}

export default function AddNew({toggleAddNew}: AddNewProps) {
  const [database, setDatabase] = useState<Food[]>(getDatabase());
  const [foodName, setFoodName] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const addFood = (food: Food) => {
    const updatedDatabase = [...database, food];
    setDatabase(updatedDatabase);
    updateDatabase(updatedDatabase);
  };

  const handleAddFood = () => {
    if (foodName.trim() === "") return;
    const newFood: Food = {
      id: getDatabase().length,
      name: foodName,
      dateAdded: new Date().toDateString(),
      expirationDate: new Date(expirationDate).toDateString(),
      expired: false,
    };
    addFood(newFood);
    console.log(getDatabase().length);
    setFoodName("");
    setExpirationDate("");
  };

  return (
    <div className="flex justify-center items-center">
    <div className="font-montserrat bg-opacity-95 h-auto w-[500px] animate-fade-up border-slate-300 border-2 bg-gray-100 z-30 p-2 items-center flex flex-col z-30 mt-[600px] fixed">
      <button className="h-8 w-8 absolute top-2 right-2"
        onClick={toggleAddNew}
        >
        <XMarkIcon/>
      </button>
      <div className="text-[40px] p-3 mt-2 font-amatic">Add new food</div>
        Name: 
        <input
            className="p-1 mb-5"
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
        /><br/>
        Expiration date (YYYY-MM-DD):
        <input
            className="p-1 mb-5"
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
        />
        <br/>
        <button className="bg-blue-300 hover:bg-blue-600 p-2 rounded-lg mb-5" 
            onClick={handleAddFood}>Add</button>
    </div>
    </div>
  );
}
