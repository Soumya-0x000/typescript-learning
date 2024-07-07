type Draggable = {
    position: { x: number, y: number },
    drag: (dx: number, dy: number) => void
}

type Resizable = {
    dimensions: { width: number, height: number },
    resize: (newWidth: number, newHeight: number) => void
}

type Movable = {
    move: (newX: number, newY: number) => void
}

type UIWidget = Draggable & Resizable & Movable;

let textBox: UIWidget = {
    position: { x: 0, y: 0 },
    dimensions: { width: 100, height: 50 },
    
    drag: function(dx: number, dy: number) {
        this.position.x += dx;
        this.position.y += dy;
        console.log(`Dragged to position: (${this.position.x}, ${this.position.y})`);
    },
    
    resize: function(newWidth: number, newHeight: number) {
        this.dimensions.width = newWidth;
        this.dimensions.height = newHeight;
        console.log(`Resized to: ${this.dimensions.width}x${this.dimensions.height}`);
    },
    
    move: function(newX: number, newY: number) {
        this.position.x = newX;
        this.position.y = newY;
        console.log(`Moved to: (${this.position.x}, ${this.position.y})`);
    }
}

// Usage
textBox.drag(10, 20);
textBox.resize(150, 75);
textBox.move(50, 50);

console.log(textBox.position);
console.log(textBox.dimensions);
