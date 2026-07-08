import type { RouteLocationRaw } from 'vue-router';
import type { UIImgProps } from '../UI/UIImg/types';
import type { UITextProps } from '../UI/UIText/types';

export type CardLinkProps = {
  to: RouteLocationRaw;
  imgPath: UIImgProps['path'];
  imgAlt?: UIImgProps['alt'];
  imgRounded?: UIImgProps['isRounded'];
  textAlign?: UITextProps['align'];
};
