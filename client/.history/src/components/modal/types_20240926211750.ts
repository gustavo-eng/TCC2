export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  path?: string;
}