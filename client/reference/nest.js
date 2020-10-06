@Injectable()
export class Cats Service {
    constructor(@Injectable('Cat'))

    async create(cat) {
        const createCat = new this.catModel(cat)
        return await createCat.save()
    }

    async findAll() {
        return await this.catModel.find().exec()
    }
}
