import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

// Meta tags: Info sobre la página como tal y cierta info que riga en nuestro editor visual.
const meta = {
    title: 'UI/labels/MyLabel', // Titulo en sidebar dentro del grupo "UI"
    component: MyLabel, // Componente a mostrar
    tags: ['autodocs'], // Brinda información como por ejemplo "autodocs"
    parameters: {
        layout: 'centered', // Centra el contenido en la pantalla
    },
    argTypes: { // Formatea la visual de cómo se ven las opciones
        size: { control: 'inline-radio' } // Muestra en linea. Tambien se puede mostrar como 'select', etc.
    }
} satisfies Meta<typeof MyLabel>;

export default meta; // Exportación
type Story = StoryObj<typeof meta>;

// =========== Historias ===========
export const Basic: Story = {
    args: { // Opciones que se van a ver en los "controls" de storybook
        label: 'Basic', // Las obligatorias como label tienen "*" color rojo
        size: 'normal'
    }
};
export const AllCaps: Story = {
    args: { // Opciones que se van a ver en los "controls" de storybook
        label: 'All Caps Label', // Las obligatorias como label tienen "*" color rojo
        allCaps: true,
    }
};
export const Secondary: Story = {
    args: { // Opciones que se van a ver en los "controls" de storybook
        label: 'Secondary Label', // Las obligatorias como label tienen "*" color rojo
        color: 'text-secondary',
    }
};
export const CustomColor: Story = {
    args: { // Opciones que se van a ver en los "controls" de storybook
        label: 'Custom Color Label', // Las obligatorias como label tienen "*" color rojo
        fontColor: 'pink'
    }
};

