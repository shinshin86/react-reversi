export type BlockStatusString = '' | 'black' | 'white';
export type Status = 0 | 1 | 2;
export type Square = {
  location: number;
  status: Status;
};
export type BlockMap = {
  [Key in Status]: BlockStatusString;
};
