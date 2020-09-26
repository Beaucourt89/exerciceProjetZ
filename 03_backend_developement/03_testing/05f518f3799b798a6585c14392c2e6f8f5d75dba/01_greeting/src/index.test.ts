
import {greet} from "./index";

  test("retrun Hello WORLD if name empty ", function() {
    expect.assertions(1);

    const result = greet();

    expect(result).toBe("Hello WORLD!");
  });
  
  test("return Hello name uppercase", function() {
    expect.assertions(1);

    const result = greet("toto");
    
    expect(result).toBe("Hello TOTO!");
  });