import { Provider } from "react-redux";
import { store } from "./redux/todoSlice";
import AppContent from "./components/layout/AppContent";

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
