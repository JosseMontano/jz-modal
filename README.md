1. In the file where we want the modal we have that call the hook and the component.
   The component receives the state of the modal, the function it hides, and the content.

```
import {useModal, Modal} from "jz-modal"
const { isShown, toggle } = useModal({});

<Modal
  hide={toggle}
  isShown={isShown}
  modalContent={<p>HELLO WORLD</p>}
/>

```

2. If we want to change the color we have to execute the changeBackground function in the app.tsx file


```
import { useModalStore } from "@/global/store/modalStore";

const { changeBackground, changeColor } = useModalStore();

useEffect(() => {
  changeBackground("#203a43");
  changeColor("#000");
}, []);

```
