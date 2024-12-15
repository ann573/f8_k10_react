  import React, { lazy } from "react";
import { PropagateLoader } from "react-spinners";

  const App = () => {
    // const {products} = useSelector((state) => state.products)
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //   (async () =>{
    //     const res = await fetch("http://localhost:3000/products")
    //     const data = await res.json()
    //     dispatch(setProduct(data))
    //   })()
    // },[])

    const LoadedDataComponent = () => {
      return <h1>Đây là content sau load</h1>
    }
    const LoadedData = lazy(() => new Promise(resolve => {
      setTimeout(() => {
        resolve({ default: LoadedDataComponent });
      }, 2500);
    }));

    return (
      <>
        {/* {JSON.stringify(products)} */}
        <div className="text-center text-4xl font-bold mt-5">App</div>
        <section className="flex justify-center mt-5">
        <React.Suspense
          fallback={<PropagateLoader  color="#f21919" />}
        >
          <LoadedData/>
        </React.Suspense>
        </section>
      </>
    );
  };

  export default App;
