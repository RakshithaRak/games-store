import { Image, ImageProps } from "@chakra-ui/react";
import emoji3 from "../assets/Emoji-3.png";
import emoji4 from "../assets/Emoji-4.png";
import emoji5 from "../assets/Emoji-5.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: emoji3, alt: "meh", boxSize: "25px" },
    4: { src: emoji4, alt: "recommended", boxSize: "25px" },
    5: { src: emoji5, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
