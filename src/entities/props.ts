import { Birthday } from "@src/entities/app";

interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ItemProps {
  birthday: Birthday;
}
