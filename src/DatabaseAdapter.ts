import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

export interface HasEntities<M> {
	entities: M[],
}

export class DatabaseAdapter<T extends HasEntities<M>, M> {
	protected adapter: JSONFile<T>;
	protected db: Low<T>;

	constructor(
		file: string
	) {
		this.adapter = new JSONFile<T>(file);
		this.db = new Low(this.adapter);
	}

	async getEntities(): Promise<M[]> {
		await this.db.read();

		if (!this.db.data) {
			throw new Error('No entities found');
		}

		return this.db.data.entities;
	}
}
