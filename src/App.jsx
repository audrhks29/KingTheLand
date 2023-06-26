import { Routes, Route, HashRouter } from "react-router-dom";
import Main from "./components/Main";
import Member from "./components/Member";
import MemberDetail from "./components/MemberDetail";
import { useAxios } from './hooks/useAxios';
import './assets/css/reset.css'
import './assets/css/style.scss'
const App = () => {
  const { data } = useAxios("https://gist.githubusercontent.com/audrhks29/5db96a806a94d0fc5b1bb62eb1d261dc/raw/5cd25041371eafff38a4f0436dc12e99e00d2b5a/drama.json")
  return (
    <div className="wrap">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="member">
            <Route element={<Member data={data} />} />
            <Route path=":actorId" element={<MemberDetail data={data} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;