import { Heading } from "@/components/atoms/heading";
import { Underline } from "@/components/atoms/underline";
import { BaseComponentProps } from "@/types/common.types";

export interface HeaderCommonProps extends BaseComponentProps {
  first: string;
  middle: string;
  last: string;
}
const HeaderCommon = ({ first, middle, last }: HeaderCommonProps) => {
  return (
    <div className="m-header">
      <Heading tag="h3">
        {first} <span className="m-header__highlighted">{middle}</span> {last}
      </Heading>
      <Underline type="small" />
    </div>
  );
};
export default HeaderCommon;
