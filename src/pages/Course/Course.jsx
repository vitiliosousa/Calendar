import Card from "../../Components/Card";
import cards from "../../Components/Cards"

export default function Course() {
    return(
        <>
            <div className="w-screen h-full p-5 gap-2 flex flex-col justify-evenly items-center bg-zinc-900 font-poppins">
                {cards.map((card,index) => (
                    <Card
                    key={index}
                    image={card.image}
                    nome={card.nome}
                    />
                ))}
            </div>
        </>
    )
}