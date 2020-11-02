type TodoProps = {
  uuid: string;
  description: string;
};

export class TodoEntity {
  public readonly uuid: string;
  public readonly description: string;

  constructor({ uuid, description }: TodoProps) {
    const trimedDescription = description.trim();
    if (trimedDescription.length <= 3) {
      throw new Error("Todo description should be at least 4 characters long");
    }

    this.uuid = uuid;
    this.description =
      trimedDescription[0].toUpperCase() + trimedDescription.slice(1);
  }
}
