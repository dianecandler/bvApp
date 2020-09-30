// Calendar drives booking - once dates selected, shows available products & drives user to Registration
import React from 'react';

import { Jumbotron, Container, Row, Col } from 'react-bootstrap';


import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}


export default function index() {
    const FORMAT = 'MM/dd/yyyy';
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center border border-dark p-5">
                            <h2><strong>Lets get started!</strong></h2>
                            <hr />
                            <h5>Select the date to host your event.</h5>
                            <br />
                            <DayPickerInput
                                formatDate={formatDate}
                                format={FORMAT}
                                parseDate={parseDate}
                                placeholder={`${dateFnsFormat(new Date(), FORMAT)}`
                                }
                                initialMonth={new Date(2020, 10)}
                                disabledDays={[
                                    new Date(2020, 9, 29),
                                    new Date(2020, 10, 3),
                                    {
                                      after: new Date(2020, 10, 7),
                                      before: new Date(2020, 10, 31),
                                    },
                                  ]}

                            />

                            <br />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}



