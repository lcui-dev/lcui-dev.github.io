#include <LCUI.h>
#include <LCUI/main.h>

int main(int argc, char **argv)
{
        ui_widget_t *pack;

        lcui_init();
        pack = ui_load_xml_file("todolist.xml");
        if (!pack) {
                return -1;
        }
        ui_root_append(pack);
        ui_widget_unwrap(pack);
        ui_widget_set_title(ui_root(), L"Todo list");
        return lcui_main();
}
