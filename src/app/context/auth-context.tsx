import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import firebase_app from "../../firebase/config";
interface child {
  children: ReactNode;
}

const auth = getAuth(firebase_app);
export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }: child) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
