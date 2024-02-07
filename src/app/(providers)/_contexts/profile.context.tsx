// import { createContext, useContext, useReducer } from "react";

// type ProfileContextValue = {
//   nickName: any;
//   updateNickname: any;
// };

// const initialValue = {
//   nickName: "",
// };

// const ProfileContext = createContext<ProfileContextValue | undefined>(
//   undefined
// );

// export const useAuth = () => useContext(ProfileContext);

// export function ProfileProvider({ children }: { children: React.ReactNode }) {
//   const [nickname, setNickname] = useReducer(textReducer, initialValue);
//   const value: ProfileContextValue = {
//     nickname,
//     setNickname,
//   };
//   return (
//     <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
//   );
// }
