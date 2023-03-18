function App() {
  const cambiarDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="text-center">
      <p className="dark:bg-black dark:text-white">Hola Mundo</p>
      <button onClick={cambiarDarkMode}>Cambiar Tema</button>
    </div>
  );
}

export default App;
