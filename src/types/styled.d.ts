import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    clr_accent?: string;
    clr_accent_hover?: string;
    clr_additional?: string;
    clr_background?: string;
    clr_text?: string;
    media_mobile?: string;
    media_tablet?: string;
    media_desctop?: string;
    animation_rotate?: string;
  }
}