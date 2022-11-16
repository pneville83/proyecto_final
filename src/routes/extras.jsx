  // const [currentUser, setCurrentUser] = useState(null);
  
  // useEffect (()=>{
  //   setCurrentState(1)
  //   onAuthStateChanged(auth, async(user)=>{
  //     if(user){
  //       const isRegistred = await userExist(user.uid);
  //       if(isRegistred){
  //         navigate('/dashboard')
  //         setCurrentState(2)
  //       }else {
  //         navigate('/choose-username')
  //         setCurrentState(3)
  //       }
  //     }else {
  //       setCurrentState(4)
  //       console.log('No hay nadie autenticado')
  //     }

  //   });

  // }, [navigate]); 
  
  
  // if (state ===2) {
  //   return <div>Estas autenticado y registrado</div>
  // }

  // if (state === 3) {
  //   return <div>Estas autenticado pero no registrado</div>
  // }