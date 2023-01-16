export interface IHassWs {
    entities: {
        entity_id: string,
        state: string,
        attributes: { friendly_name: string }
    }[]
}