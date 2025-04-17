import Image from "next/image";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 ">
    <span>
       
    <Image
        width={40}
        height={20}
        className="w-8 h-8"
        alt="user icon logo"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
    </span>
     
      <span>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
