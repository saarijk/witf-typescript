interface HomeProps {
  handleClick: () => void;
}

export default function Home({ handleClick }: HomeProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="app font-amatic text-[80px] text-shadow-strong animate-fade-down animate-delay-100">
          What's in the fridge?
        </div>
        <button
          className="bg-blue-200 font-amatic text-[40px] w-[150px] p-1 rounded-xl mt-4 hover:bg-blue-300 animate-fade-down animate-delay-500"
          onClick={handleClick}
        >
          Open
        </button>
      </div>
    </div>
  );
}
