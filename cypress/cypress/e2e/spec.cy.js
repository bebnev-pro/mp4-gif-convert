
describe('Test the API', () => {

  it('Ping to host', () => {
    cy.request('GET','http://localhost:3000/').then((response) =>{
      expect(response.status).to.eq(200)
    });
  });


  it('Press convert button and expecting the GIF', () => {

    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock1-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock1-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock2-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock2-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock3-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock3-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock4-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock4-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock5-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock5-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock6-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock6-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock7-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock7-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock8-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock8-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock9-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock9-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });
  });

  it('Press convert button and expecting the GIF', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id=\'mock11-h.mp4\']').click()
    cy.intercept('GET', '/get-file/mock11-h.mp4', (req) => {
      req.continue((res) => {
        expect(res.headers['content-disposition']).to.eq('image/gif');
      });
    });

  });
});