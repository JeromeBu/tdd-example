type TodoProps = {
  uuid: string;
  description: string;
};

export class TodoEntity {
  public readonly uuid: string;
  public readonly description: string;

  constructor({ uuid, description }: TodoProps) {
    if (description.length <= 3) {
      throw new Error("Todo description should be at least 3 characters long");
    }

    this.uuid = uuid;
    this.description = description;
  }
}
