
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Alignment</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is left-aligned
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
