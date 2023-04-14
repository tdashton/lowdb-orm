import { DatabaseAdapter, HasEntities } from "./DatabaseAdapter.js";

export interface HasId {
	id: number,
}

export class Manager<T extends HasEntities<M>, M extends HasId> {
	constructor(
		public adapter: DatabaseAdapter<T, M>
	) { }

	public async findById(id: number): Promise<M> {
		const entities = await this.adapter.getEntities();
		const entity = entities.find((value: M) => {
			if (value.id === id) {
				return value;
			}
		});

		if (entity) {
			return entity;
		}

		throw new Error('id not found');
	}
}
