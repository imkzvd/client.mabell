import type { RouteLocationRaw } from '#vue-router';
import type { UIImgProps } from '~/modules/shared/components/UI/UIImg/types';
import type { UITextProps } from '~/modules/shared/components/UI/UIText/types';

export type CardLinkProps = {
  to: RouteLocationRaw;
  imgPath: UIImgProps['path'];
  imgAlt?: UIImgProps['alt'];
  imgRounded?: UIImgProps['isRounded'];
  textAlign?: UITextProps['align'];
};
