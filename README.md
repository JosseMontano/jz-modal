app.tsx

```
import { useModalStore } from "@/global/store/modalStore";

useEffect(() => {
changeBackground("#203a43");
changeColor("#000");
}, []);

```

```
    const { isShown, toggle } = UseModal({});

       <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<p>HELLO WORLD</p>}
      />

```
