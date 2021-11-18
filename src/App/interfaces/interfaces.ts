export interface I_Meme {
  // Facultatif id
  id?: number;
  titre: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fontWeight: string;
  underline: boolean;
  italic: boolean;
  frameX: number;
  frameY: number;
  color: string;
  imageId: number;
}

export interface I_Image {
  id: number;
  url: string;
  titre: string;
  h: number;
  w: number;
}
