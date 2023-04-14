# Example

Test code to get you up and running.

```typescript

interface Entity {
	id: number;
	field2: boolean;
	field3: string;
};

interface EntityDbFormat {
	entities: Entity[];
};

const instance = new DatabaseAdapter<EntityDbFormat, Entity>('entity.json');
const manager = new Manager<EntityDbFormat, Entity>(instance);
const entity = manager.findById(1);
```
