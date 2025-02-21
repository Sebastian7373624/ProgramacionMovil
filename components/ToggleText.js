import { useState } from "react";

const ToggleText = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-sm text-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => setVisible(!visible)}
      >
        {visible ? "Ocultar" : "Mostrar"} Texto
      </button>
      {visible && <p className="mt-4 text-gray-700">texto visible.</p>}
    </div>
  );
};

export default ToggleText;
