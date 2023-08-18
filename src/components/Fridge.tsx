import { getDatabase, updateDatabase, DB_KEY } from "@/databaseManager";
import { Food } from "@/types/Food";
import { SetStateAction, useState } from "react";
import AddNew from "@/components/AddNew";

interface FridgeProps {
  clickReturn: () => void;
}

export default function Fridge({ clickReturn }: FridgeProps) {
  const [database, setDatabase] = useState<Food[]>(getDatabase());
  const [showAddNew, setShowAddNew] = useState(false);
  const toggleAddNew = () => {
    setShowAddNew(!showAddNew);
  };

  const handleEmptyDatabase = () => {
    console.log("Clearing database...");
    localStorage.removeItem(DB_KEY);
    console.log("Database cleared from localStorage");
    setDatabase([]); // Clear the database in state
    console.log("Database state cleared");
    //setNextId(0); // Reset the nextId counter
    console.log("Next ID reset to 0");
    // Verify if the database is empty after this step
    console.log("Current database:", getDatabase());
  };

  return (
    <>
    {showAddNew ? <><AddNew toggleAddNew={toggleAddNew} /></> : ""}
      <div className="flex items-center justify-between">
        <div className="font-amatic text-[40px] ml-10">What's in the fridge?</div>
        <div className="flex justify-end w-1/3 mr-10">
        <button
          className="font-amatic text-[30px] p-2 mr-5 hover:text-blue-700"
          onClick={clickReturn}
        >
          Return
        </button>
        <button
          className="font-amatic text-[30px] p-2 mr-5 hover:text-blue-700"
          onClick={toggleAddNew}
        >
          Add new
        </button>
        </div>
        </div>
        <div className="flex flex-col items-center h-2/3 ">
        {database.length === 0 ? (
        <div className="font-amatic text-3xl my-5 mt-[300px]">No entries (yet)</div>
        ) : (
            <table className="font-montserrat w-11/12 p-3 mt-5 text-left">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Added</th>
                        <th>Expires</th>
                        <th>Has Expired</th>
                    </tr>
                </thead>
                <tbody>
                    {database.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td className="hover:text-blue-600 hover:animate-pulse">{item.name}</td>
                            <td>{item.dateAdded.toLocaleString()}</td>
                            <td>{item.expirationDate.toLocaleString()}</td>
                            <td>{item.expired.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        <button className="p-2 bg-blue-700 text-white rounded-lg font-montserrat bottom-3 right-3 z-30 fixed"
            onClick={handleEmptyDatabase}
            >
                Empty DB
        </button>
      </div>
    </>
  );
}
