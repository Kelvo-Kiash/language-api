export interface Item {
    text?:string;
  }


export interface Results {
    text?:string;
    pos?: number;
    neg?: number;
  }


  export interface TranslationItem {
    text?:string;
    language_output?:string;
    language_input?: string;
  }