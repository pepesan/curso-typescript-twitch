/** Una función genérica conserva el tipo concreto que recibe y devuelve. */
export function identidad<T>(valor: T): T {
    return valor;
}

/** T[] relaciona el tipo del elemento con el array completo. */
export function primero<T>(elementos: readonly T[]): T | undefined {
    return elementos[0];
}

interface Identificable {
    id: number;
}

/** `extends` restringe T a objetos que tengan al menos una propiedad id. */
export class Repositorio<T extends Identificable> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    buscarPorId(id: number): T | undefined {
        return this.elementos.find((elemento) => elemento.id === id);
    }

    listar(): readonly T[] {
        return this.elementos;
    }
}

interface Usuario {
    id: number;
    nombre: string;
    correo: string;
}

export function setupGenerics(element: HTMLParagraphElement): void {
    // TypeScript infiere T como string y como number en estas dos llamadas.
    const texto = identidad("Hola, generics");
    const cantidad = identidad(3);

    const usuarios = new Repositorio<Usuario>();
    usuarios.agregar({ id: 1, nombre: "Ada", correo: "ada@example.com" });
    usuarios.agregar({ id: 2, nombre: "Grace", correo: "grace@example.com" });

    const primerUsuario = primero(usuarios.listar());
    const usuarioEncontrado = usuarios.buscarPorId(2);

    element.innerHTML = `
        identidad("Hola, generics"): ${texto}; identidad(3): ${cantidad}<br>
        primero(["a", "b"]): ${primero(["a", "b"])}<br>
        Usuario con id 2: ${usuarioEncontrado?.nombre ?? "no encontrado"}<br>
        Tipo del primer usuario: ${primerUsuario?.nombre ?? "no hay usuarios"}
    `;
}
