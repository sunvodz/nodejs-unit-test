const assert = require('assert');
const PostsComponent = require('../components/posts.component');

describe('ทดสอบการทำงานของ PostsComponent', () => {

    var component = new PostsComponent();
    beforeEach(() => component = new PostsComponent(
        require('validate.js'),
        class {
            constructor() {
                this.items = [{
                    id: 1,
                    post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
                    post_category: 'เมนูอาหาร 1',
                    post_name: 'เมนูอาหาร อาหารไทยง่ายๆ',
                    post_detail: 'เมนูอาหาร อาหารไทยง่ายๆ ทำกินเองที่บ้านได้ กับข้าว อาหารไทยมีอะไรบ้าง รวมสูตรอาหาร เมนูต้ม เมนูผัด เมนูแกง เมนูทอด เมนูนึ่ง เมนูปิ้งย่าง เมนูหมู เมนูปลา เมนูไก่ เมนูปลาหมึก เมนูกุ้ง เมนูหอย อาหารไทย คือ อาหารประจำชาติไทย เอกลักษณ์วัฒนธรรมการกินจากอดีตสู่ปัจจุบัน อาหารของไทย วัฒนธรรมประจำชาติที่สำคัญของประเทศไทย',
                    post_date: new Date()
                },
                {
                    id: 2,
                    post_image: 'https://www.thairath.co.th/media/CiHZjUdJ5HPNXJ92GO23O1QNu0RloV4jY5.jpg',
                    post_category: 'เมนูอาหาร 2',
                    post_name: 'เมนูอาหาร อาหารไทยง่ายๆ',
                    post_detail: 'เมนูอาหาร อาหารไทยง่ายๆ ทำกินเองที่บ้านได้ กับข้าว อาหารไทยมีอะไรบ้าง รวมสูตรอาหาร เมนูต้ม เมนูผัด เมนูแกง เมนูทอด เมนูนึ่ง เมนูปิ้งย่าง เมนูหมู เมนูปลา เมนูไก่ เมนูปลาหมึก เมนูกุ้ง เมนูหอย อาหารไทย คือ อาหารประจำชาติไทย เอกลักษณ์วัฒนธรรมการกินจากอดีตสู่ปัจจุบัน อาหารของไทย วัฒนธรรมประจำชาติที่สำคัญของประเทศไทย',
                    post_date: new Date()
                }]
            }

            /**
             * 
             * @param {string} sql 
             * @param {any} params 
             */
            query(sql, params = null) {
                return new Promise((resolve, reject) => {
                    const query = sql.toLowerCase();
                    if (query.indexOf('select') >= 0) {
                        if (params == null)
                            resolve(this.items);
                        else resolve(this.items.filter(m => m.id == params[0]));
                    }
                });
            }
        }
    ));

    it('ต้องมี Function selectAll', () => {
        assert.equal(typeof component.selectAll, 'function');
    });

    it('ต้องมี Function selectOne', () => {
        assert.equal(typeof component.selectOne, 'function');
    });

    it('ต้องมี Function create', () => {
        assert.equal(typeof component.create, 'function');
    });

    it('ต้องมี Function update', () => {
        assert.equal(typeof component.update, 'function');
    });

    it('ต้องมี Function delete', () => {
        assert.equal(typeof component.delete, 'function');
    });

    it('Function selectAll ต้องทำงานถูกต้อง', async () => {
        const items = await component.selectAll();
        assert.equal(items.length, 2);
    });

    it('Function selectOne ต้องทำงานถูกต้อง', async () => {
        const item = await component.selectOne(2);
        assert.equal(item.post_category, 'เมนูอาหาร 2');
    });
});