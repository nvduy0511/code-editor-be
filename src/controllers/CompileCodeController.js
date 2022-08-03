import axios from 'axios';
import qs from 'qs';

class CompileCodeController {
    async compileCode(reqCode) {
        var data = qs.stringify(reqCode);
        var config = {
            method: 'post',
            url: 'https://compile-run-code.herokuapp.com/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
        };
        return axios(config);
    }

    runCode = async (req, res) => {
        const data = req.body;
        try {
            const result = await this.compileCode(data);
            res.send(result.data);
        } catch (error) {
            res.send(error);
        }
    };

    runCodes = async (req, res) => {
        let promies = [];
        for (let index = 0; index < 10; index++) {
            promies.push(this.compileCode({ a: 2 }));
        }
        Promise.allSettled(promies)
            .then((values) => {
                res.json(
                    values.map((item) => {
                        return item.status === 'fulfilled'
                            ? item.value.data
                            : item.reason;
                    }),
                );
            })
            .catch((error) => {
                res.send(error);
            });
    };
}
export default new CompileCodeController();
