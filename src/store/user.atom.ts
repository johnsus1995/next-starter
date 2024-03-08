import { atom } from 'recoil';

type TdefaultValues = {
  email: string;
  userName: string;
};

const defaultValues: TdefaultValues = {
  email: 'test@gmail.com',
  userName: 'test',
};

export const localStorageEffect =
  (key: string) =>
  // eslint-disable-next-line @typescript-eslint/ban-types
  ({ setSelf, onSet }: { setSelf: Function; onSet: Function }) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue: unknown, _: unknown, isReset: unknown) => {
        // eslint-disable-next-line no-unused-expressions
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const userAtom = atom({
  key: 'userState',
  default: defaultValues,
  effects: [localStorageEffect('userDetails')],
});
