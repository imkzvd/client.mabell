import type { UIFormContext, UIFormItemContext } from '~/modules/shared/components/UI/UIForm/types';

export const baseClass: string = 'ui-form';

export const UIFormContextKey: InjectionKey<UIFormContext> = Symbol('UIFormContextKey');

export const UIFormItemContextKey: InjectionKey<UIFormItemContext> = Symbol('UIFormItemContextKey');
