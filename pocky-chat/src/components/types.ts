export interface Message {
    fromUser: boolean;
    text: string;
    time: string;
    file?: {
      name: string;
      url: string;
      type: string;
    };
  }
  