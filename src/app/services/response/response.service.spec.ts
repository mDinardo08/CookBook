import { Response } from "./../../util/response/response";
import { ResponseService } from "./response.service";

describe("Response service", () => {

    let service;

    beforeEach(() => {
        service = new ResponseService();
    });

    it("Will return a new response", () => {
        const r = service.getResponse();
        expect(r).toEqual(jasmine.any(Response));
    });

});
