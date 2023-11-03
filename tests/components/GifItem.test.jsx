import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => { 

    const title = "Esto es un título";
    const url = "https://hola.com/"

    
    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title = {title} url = {url}/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url y el alt indicado', () => { 
        
        render(<GifItem title = {title} url = {url}/>);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('Debe mostrarse el título en el componente', () => { 
        
        render(<GifItem title = {title} url = {url}/>);
        expect(screen.getByText(title)).toBeTruthy();

    })

 })

 