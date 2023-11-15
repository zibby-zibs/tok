import Modal from "@/app/_components/modal";
import Image from "next/image";
import React from "react";

type Props = {
  isOpen?: boolean;
  onClose: () => void;
  src: string | null;
};

const ImageModal = ({ isOpen, onClose, src }: Props) => {
  if (!src) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
