


describe("SECTION 5 Node handling", function() {

    beforeEach(function() {
    });

    it("Insert Node, and recover it", function() {
    	let column = new S5_KanbanColumn();
    	column.insert(new S5_KanbanNode(3))
    	let kn = column.extract();
        assert.equal(kn.id, 3);
    });

    it("Insert 3 Nodes, and recover FIFO", function() {
    	let column = new S5_KanbanColumn();
    	column.insert(new S5_KanbanNode(1));
    	column.insert(new S5_KanbanNode(2));
    	column.insert(new S5_KanbanNode(3));
    	let kn = column.extract_FIFO();
        assert.equal(kn.id, 1);
    });

    it("Set empty column, count should be 0", function() {
    	let column = new S5_KanbanColumn();
        assert.equal(column.count(), 0);
    });

    it("Insert 3 Nodes, and count them", function() {
    	let column = new S5_KanbanColumn();
    	column.insert(new S5_KanbanNode(1))
    	column.insert(new S5_KanbanNode(2))
    	column.insert(new S5_KanbanNode(3))
        assert.equal(column.count(), 3);
    });

    it("S5_KanbanColumn.init_load_nodes()", function() {
    	let column = new S5_KanbanColumn();
    	column.init_load_nodes();
        assert.equal(column.count(), 10);
    });

    it("S5_KanbanColumn.extract_FIFO() removes first ", function() {
    	let column = new S5_KanbanColumn();
    	column.insert(new S5_KanbanNode(1))
    	column.insert(new S5_KanbanNode(2))
    	column.insert(new S5_KanbanNode(3))
    	let kn = column.extract_FIFO();
        assert.equal(kn.id, 1);
        assert.equal(kn.next_node, null);
        assert.equal(column.count(), 2);
    });

});