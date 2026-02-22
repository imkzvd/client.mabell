import type { UIFormContext, UIFormItemContext } from '~/layers/shared/components/UI/UIForm/types';

export const UIFormContextKey: InjectionKey<UIFormContext> = Symbol('UIFormContextKey');

export const UIFormItemContextKey: InjectionKey<UIFormItemContext> = Symbol('UIFormItemContextKey');
