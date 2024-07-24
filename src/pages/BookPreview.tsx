import { useEffect, useState } from "react";
import { getBook } from "../api/api";
import { useParams } from "react-router-dom";

export const BookPreview = () => {
    const {id} = useParams();
    const [book, setBook] = useState();

    useEffect(()=>{
        const getData = async() => {
            id && setBook(await getBook(id));
        }

        id && getData();
    },[id]);

    return <div className="flex flex-col w-screen h-screen px-[22%] py-24 overflow-scroll z-[-1]">
        <div className="static w-full min-h-[300px] bg-[cover] bg-no-repeat bg-[url('./assets/storyImg.svg')] rounded-3xl">
            <div className="z-1 bg-gradient-to-t from-black to-transparent w-full h-[30%] absolute bottom-0 rounded-3xl"></div>
            <h2 className="z-2 absolute bottom-2 text-[24px] font-[700] text-white w-full text-center">The Old Man and His Grandson </h2>
        </div>
        <div className="mt-[330px] w-full">
            <h6>Once upon a time, in a little cottage on the edge of a village, lived an old man with his son, daughter-in-law, and his dear grandson, Peter. The old man was very old and frail, with trembling hands and weak eyes, but he loved his family very much, especially Peter.
As the old man grew older, it became harder for him to eat without making a mess. He would often spill his food and drink, and sometimes, the daughter-in-law would get very upset with him. "Why can't you be more careful?" she would say angrily. "You’re making such a mess!"
One evening, during dinner, the old man accidentally dropped his bowl of soup. It shattered into pieces, spilling the soup all over the table. The daughter-in-law was furious and decided that the old man should eat separately at a small table in the corner.From that day on, the old man ate his meals alone at the small table, with only a wooden bowl and spoon. He felt very sad and lonely, but he didn't want to make any more trouble for his family.
Little Peter watched all of this quietly. He loved his grandfather and felt bad seeing him treated this way. One day, Peter decided to do something. He went to the garden and started carving a small wooden bowl. His father saw him and asked, "Peter, what are you making?"
"I'm making a wooden bowl for you and Mommy to eat from when you get old," Peter replied innocently.
Peter's father was taken aback by his son's words. He realized how unkind they had been to the old man. Peter's words made him think about how he would want to be treated when he grew old.
</h6>
        </div>
    </div>
}